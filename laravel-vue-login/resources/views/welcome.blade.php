<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" value="{{ csrf_token() }}" />
   @vite('resources/css/app.css')
    <title>LemonSwan App</title>
</head>

<body>
    <div id="app" class="min-h-screen flex flex-col md:justify-center items-center pt-6 md:pt-0 bg-premium-gradient">
        <login />
    </div>
        @vite('resources/js/app.js')
</body>

