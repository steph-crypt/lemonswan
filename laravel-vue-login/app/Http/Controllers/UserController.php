<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{

   public function list()
      {
           return response()->json([
                'users' => \App\Models\User::latest()->get()
           ]);

      }

    public function auth(Request $request)
    {

      $data = $request->json()->all();

      $posted_password = $data['password'];
      $posted_email = $data['email'];

      $hashed_password = Hash::make($posted_password);
      $authed_user = DB::table('users')->where([['email', '=', $posted_email],
      ['password', '=', $hashed_password]])->first();

    if ($authed_user) {
        return response()-> json([$authed_user]);
      }
      return response()-> json([ 'statusText' => 'FAIL']);
    }
}



