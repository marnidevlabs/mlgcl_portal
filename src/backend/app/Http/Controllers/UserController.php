<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function login(Request $request)
    {
        try {
            if (auth()->attempt($request->all())) {
                $token = auth()->user()->createToken('mlgcl_portal');

                $this->response = [
                    'code' => 200,
                    'access_token' => $token->accessToken,
                    'expires_in' => $token->token->expires_at->diffInSeconds(),
                    'user' => new UserResource(auth()->user()),
                ];
            } else {
                $this->errorResponse('Invalid Credentials', 401);
            }
        } catch (Exception $e) {
            $this->errorResponse($e->getMessage());
        }

        return $this->jsonResponse();
    }

    public function index()
    {
        return UserResource::collection(User::paginate());
    }
}
