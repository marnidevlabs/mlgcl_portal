<?php

use App\Models\User;
use Spatie\Permission\Models\Role;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roles = ['Cashier', 'Administrator', 'Registrar', 'Full Time Instructor', 'Student', 'Part Time Instructor'];

        foreach ($roles as $role) {
            Role::create(['name' => $role]);
        }

        $admin = Role::where('name', 'Administrator')->get();

        $user = User::create([
            'name' => 'Administrator',
            'email' => 'admin@admin.com',
            'password' => Hash::make('admin'),
        ]);

        $user->assignRole($admin);
    }
}
