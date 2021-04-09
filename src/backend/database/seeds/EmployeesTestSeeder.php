<?php

use App\Models\Employee;
use App\Models\User;
use Illuminate\Database\Seeder;

class EmployeesTestSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = factory(User::class, 20)->create();

        foreach ($users as $user) {
            factory(Employee::class, 1)->create(['user_id' => $user->id]);
        }
    }
}
