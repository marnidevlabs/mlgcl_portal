<?php

namespace App\Services;

use Exception;

class Service
{
    protected function throwError($message = '')
    {
        throw Exception($message);
    }
}
