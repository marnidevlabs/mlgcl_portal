<?php


namespace App\Services;

use App\Models\Employee;

class EmployeeService extends Service
{
    public function getAll($params = [])
    {
        $limit = !empty($params['limit']) ? $params['limit'] : 15;
        $query = Employee::query();
        return $query->paginate(intval($limit));
    }

    public function create($params)
    {
        if (count($params) == 0) {
            $this->throwError('Params must contains atleast 1 value');
        }

        $exist = Employee::where('first_name', $params['first_name'])
            ->where('last_name', $params['last_name'])->where('middle_name', $params['middle_name'])->get();

        if (count($exist) > 0) {
            $this->throwError('Employee Already Exists');
        }

        return Employee::create($params);
    }
}
