<?php

namespace App\Http\Controllers;

use App\Models\Fund;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class FundController extends Controller
{
    public function index()
    {
        $funds = Fund::join('users', 'users.id', '=', 'funds.owner_id')
            ->select("title", "name AS owner", "funds.created_at AS date", 'funds.id', 'funds.image')
            ->get();
        return response()->json($funds, 200);
    }
    public function show($id)
    {
        $fund = Fund::join('users', 'users.id', '=', 'funds.owner_id')
            ->select("title", "name AS owner", "funds.created_at AS date", 'funds.id')
            ->findOrFail($id);
        return response()->json($fund, 200);
    }
    public function showMy()
    {
        $fund = Fund::where('owner_id', '=', auth()->user()->id)
            ->select("title", "created_at AS date", 'id', 'image')
            ->first();
        $fund->name = auth()->user()->name;
        return response()->json($fund, 200);
    }
    public function addMy(Request $request)
    {
        $validated = $this->validate($request, [
            'title' => "required",
            'image' => "required|image|max:4096"
        ]);

        $alreadyExist = Fund::where('owner_id', auth()->user()->id)->count() > 0;
        if ($alreadyExist) {
            return response()->json('', 403);
        }
        $imageName = time() . '.' . $request->image->extension();
        $request->image->storeAs('public/fund', $imageName);
        $validated['image'] = asset('storage/fund/' . $imageName);
        $validated['owner_id'] = auth()->user()->id;
        $fund = Fund::create($validated);
        $fund->name = auth()->user()->name;
        return response()->json($fund, 200);
    }
    public function deleteMy()
    {
        $fund = Fund::where('owner_id', '=', auth()->user()->id)->first();
        if ($fund->image != null) {
            Storage::disk('public')->delete(explode("storage/", $fund->image)[1]);
        }
        $fund->delete();
        return response()->json('', 204);
    }

    public function delete($id)
    {
        $fund = Fund::findOrFail($id);
        if ($fund->image != null) {
            Storage::disk('public')->delete(explode("storage/", $fund->image)[1]);
        }
        $fund->delete();
        return response()->json("", 204);
    }
}
