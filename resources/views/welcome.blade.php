<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Jura:wght@300;400;500;600;700&family=Montserrat&family=Inter&family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Pompiere&display=swap"
        rel="stylesheet">
    <link rel="icon" href="favicon.png" type="image/png">
    <link rel="icon" href="favicon.ico" type="image/x-icon">
    <title>Spes</title>

    @viteReactRefresh
    @vite('resources/js/index.jsx')
    @vite('resources/scss/app.scss')
</head>

<body>
    <!--<script src="https://www.google.com/recaptcha/api.js?render=6Lf_F9ApAAAAAHNIJBH2CYcBboCpDF26dr_uy4pC"></script>-->
    <div id="app"></div>
</body>

</html>