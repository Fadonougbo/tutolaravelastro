<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    @viteReactRefresh
    @vite(['./resources/js/App.jsx'])
</head>
<body>
    @php
        
        $users=\App\Models\User::all();
        $arr=['users'=>$users];
       /* \App\Models\User::create([
        'name'=>'doe','password'=>'doe','email'=>'doe@doe.com']);*/
       // dump($user);  
    @endphp
    <essai-essai component="App">{{ json_encode($arr) }}</essai-essai>

    <div is="essai-essai" ></div>
</body>
</html>