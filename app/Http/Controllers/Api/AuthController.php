<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class AuthController extends Controller
{
    //
    public function login(LoginRequest $request){
        $cred = request()->validated();
        if(!Auth::attempt($cred)){
            return response([
                'message' => 'Invalid Creds'
            ]);
        }
        $user = Auth::user();
        return response(compact($user));
    }
    public function signup(SignupRequest $request){
        //Create the users
        $validatedAttributes = request()->validated();
        $user = User::create($validatedAttributes);

        auth()->login($user);

        return response(compact("user"));
    }
    public function logout(){
        
    }
}
