<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Employee;
use Carbon\Carbon;
use Faker\Generator as Faker;

$factory->define(Employee::class, function (Faker $faker) {
    return [
        'user_id' => User::class,
        'first_name' => $faker->firstName,
        'last_name' => $faker->lastName,
        'middle_name' => $faker->lastName,
        'birthdate' => Carbon::now()->subYear(rand(17, 23))->format('Y-m-d'),
        'personal_email' => $faker->email,
        'religion' => 'RC',
        'civil_status' => 'single',
        'gender' => 'Male/Female',
        'contact_number' => $faker->numerify('###-####-####'),
        'block' => 'block address',
        'street' => 'street address',
        'barangay' => 'barangay',
        'municipality' => 'municipality',
        'province' => 'province',
        'zipcode' => 'zipcode',
        'emergency_contact_name' => $faker->firstName,
        'emergency_contact_number' => $faker->numerify('###-####-####'),
        'school_graduateda_name' => 'School',
        'school_graduated_year' => 'Year',
        'school_graduated_address' => $faker->address
    ];
});
