<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Google\Cloud\RecaptchaEnterprise\V1\RecaptchaEnterpriseServiceClient;
use Google\Cloud\RecaptchaEnterprise\V1\Event;
use Google\Cloud\RecaptchaEnterprise\V1\Assessment;
use Google\Cloud\RecaptchaEnterprise\V1\TokenProperties\InvalidReason;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $this->validate($request, [
            'email' => 'required',
            'password' => 'required',
            'recaptcha_token' => 'required',
        ]);

        /*$secret = '6LfzjLAqAAAAAASZvgT8XW8DxlDdta9OiZr5cUzR';
        $out = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret=' . $secret . '&response=' . $request->recaptcha_token);
        $out = json_decode($out);
        if ($out->success != true) {
            return response()->json("Captcha error", 500);
        }
        if ($out->score < 0.5) {
            return response()->json("The captcha blocked access", 403);
        }*/

        if (auth()->attempt($request->only('email', 'password'))) {
            $token = auth()->user()->createToken('token')->plainTextToken;
            $user = auth()->user();
            return response()->json(['token' => $token, 'user' => $user], '200');
        } else {
            return response()->json('Unauthorized', 403);
        }
    }

    public function logout()
    {
        auth()->user()->tokens()->delete();
        return response()->json('Logout successfully', 200);
    }

    public function create(Request $request)
    {
        $check = [
            'name' => 'required|regex:/^[а-яА-Яa-zA-Z0-9]+ +[а-яА-Яa-zA-Z0-9]+$/u|max:255',
            'number_phone' => 'required|regex:/^[+0-9]+$/u|max:15',
            'email' => 'required|email|unique:users,email',
            'password' => 'required',
            'password_repeat' => 'required|same:password',
            'accept' => 'accepted',
            //'recaptcha_token' => 'required',
        ];
        $this->validate($request, $check);

        /*$secret = '6LfzjLAqAAAAAASZvgT8XW8DxlDdta9OiZr5cUzR';
        $out = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret=' . $secret . '&response=' . $request->recaptcha_token);
        $out = json_decode($out);
        if ($out->success != true) {
            return response()->json("Captcha error", 500);
        }
        if ($out->score < 0.5) {
            return response()->json("The captcha blocked access", 403);
        }*/

        $user = User::create([
            'name' => $request->name,
            'number_phone' => $request->number_phone,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);
        auth()->login($user);
        $token = auth()->user()->createToken('token')->plainTextToken;
        return response()->json(['token' => $token, 'user' => $user], 200);
    }

    public function updateImage(Request $request)
    {
        $this->validate($request, [
            'image' => 'required|image|max:4096',
        ]);
        $user = auth()->user();
        $imageName = time() . '.' . $request->image->extension();
        $request->image->storeAs('public/photo', $imageName);
        if ($user->image != null) {
            Storage::disk('public')->delete(explode("storage/", $user->image)[1]);
        }
        $user->image = asset('storage/photo/' . $imageName);
        $user->save();
        return response()->json($user, 200);
    }

    public function index(Request $request)
    {
        return $request->user();
    }

    public function delete()
    {
        $user = auth()->user();
        $teams = Team_participant::where('user_id', $user->id)->where('role', "creator")->get();
        if ($teams === null) {
            if (!isset($teams[0]))
                $teams = [$teams];
            foreach ($teams as $team) {
                $admin = Team_participant::where('role', "admin")->where('team_id', $team->team_id)->first();
                if ($admin) {
                    $admin->role = "creator";
                    $admin->save();
                    break;
                }
                $participant = Team_participant::where('user_id', "!=", $user->id)->where('team_id', $team->team_id)->first();
                $participant->role = "creator";
                $participant->save();
            }
        }
        if ($user->image != null) {
            Storage::disk('public')->delete(explode("storage/", $user->image)[1]);
        }
        $user->tokens()->delete();
        $user->delete();
        return response()->json("", 202);
    }
    /*public function create_assessment(
        string $recaptchaKey,
        string $token,
        string $project,
        string $action
      ): void {
        // Create the reCAPTCHA client.
        // TODO: Cache the client generation code (recommended) or call client.close() before exiting the method.
        $client = new RecaptchaEnterpriseServiceClient();
        $projectName = $client->projectName($project);
      
        // Set the properties of the event to be tracked.
        $event = (new Event())
          ->setSiteKey($recaptchaKey)
          ->setToken($token);
      
        // Build the assessment request.
        $assessment = (new Assessment())
          ->setEvent($event);
      
        try {
          $response = $client->createAssessment(
            $projectName,
            $assessment
          );
      
          // Check if the token is valid.
          if ($response->getTokenProperties()->getValid() == false) {
            printf('The CreateAssessment() call failed because the token was invalid for the following reason: ');
            printf(InvalidReason::name($response->getTokenProperties()->getInvalidReason()));
            return;
          }
      
          // Check if the expected action was executed.
          if ($response->getTokenProperties()->getAction() == $action) {
            // Get the risk score and the reason(s).
            // For more information on interpreting the assessment, see:
            // https://cloud.google.com/recaptcha-enterprise/docs/interpret-assessment
            printf('The score for the protection action is:');
            printf($response->getRiskAnalysis()->getScore());
          } else {
            printf('The action attribute in your reCAPTCHA tag does not match the action you are expecting to score');
          }
        } catch (exception $e) {
          printf('CreateAssessment() call failed with the following error: ');
          printf($e);
        }
      }*/
}


