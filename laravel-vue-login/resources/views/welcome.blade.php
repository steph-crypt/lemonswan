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
    <div id="app" class="min-h-screen text-center flex flex-col md:justify-center items-center pt-6 md:pt-0 bg-premium-gradient">
        <login />
    </div>
        @vite('resources/js/app.js')
</body>


<style lang="scss">
/* Some styles are appended as I was unsure how to invoke them successfully in tailwind  */
#app {
text-align: center;
color: #2c3e50;
background: rgb(30,34,42);
background: linear-gradient(270deg, rgba(30,34,42,1) 0%, rgba(30,34,42,1) 24%, rgba(41,44,51,1) 40%, rgba(41,44,51,1) 58%, rgba(30,34,42,1) 72%, rgba(30,34,42,1) 100%);
}

</style>




