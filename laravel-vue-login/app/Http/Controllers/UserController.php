
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{

  public function index()
    {
        return view('users');
    }

    public function get(Request $request)
    {
        $posts = User::orderBy('created_at', 'desc')->get();
        return response()->json($users);
    }

    public function store(Request $request)
    {
        $user = User::create($request->all());

        return response()->json($user);
    }

//     public function logIn(Request $request)
//     {
//         $this->validate($request, [
//             'name' => 'required',
//             'email' => 'required|email|unique:users',
//             'password' => 'required'
//         ]);
//
//         $user = new User([
//             'name' => $request->input('name'),
//             'email' => $request->input('email'),
//             'password' => bcrypt($request->input('password')),
//
//         ]);
//         $user->save();
//         return response()->json([
//             'message' => 'user successfully logged in!'
//         ], 201);
//     }
}
