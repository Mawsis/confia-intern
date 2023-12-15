<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(LoginRequest $request)
    {
        $creds = $request->validated();
        if(!Auth::attempt($creds)){
            return response()->json(["message"=>"Wrong creds"]);
        }
        /**
         * @var User $user
         */
        $user = Auth::user();
        $sessionId = $user->createToken('main')->plainTextToken;
        return response(compact('user','sessionId'));
    }
    public function signup(SignupRequest $request)
    {
        $data = $request->validated();
        $user = User::create($data);
        $sessionId = $user->createToken('main')->plainTextToken;
        return response()->json([$user,"sessionId"=>$sessionId]);
    }
    public function logout()
    {
        $user = request()->user();
        $user->currentAccessToken()->delete();
        return response('',204);
    }
}