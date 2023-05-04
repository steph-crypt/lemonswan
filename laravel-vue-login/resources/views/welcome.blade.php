<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" value="{{ csrf_token() }}" />
   @vite('resources/sass/app.scss')
    <title>LemonSwan Login</title>
</head>

<body>
    <div id="app">
        <login />
    </div>
        @vite('resources/js/app.js')
</body>

<style lang="scss">

body {
    background-color: #1f2129;
    display: flex;
    justify-content: center;
}

</style>

