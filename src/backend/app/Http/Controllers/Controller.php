<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    protected $response = [
        'code' => 200,
    ];

    protected function errorResponse($message, $code = 500)
    {
        $this->response = [
            'code' => $code,
            'message' => $message,
        ];
    }

    protected function jsonResponse()
    {
        return response()->json($this->response, $this->response['code']);
    }
}
