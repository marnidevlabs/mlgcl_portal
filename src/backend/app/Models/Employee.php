<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    protected $fillable = [
        'user_id',
        'first_name',
        'last_name',
        'middle_name',
        'birthdate',
        'personal_email',
        'religion',
        'civil_status',
        'gender',
        'contact_number',
        'block_number',
        'street',
        'barangay',
        'municipality',
        'province',
        'zipcode',
        'emergency_contact_name',
        'emergency_contact_number',
        'school_graduateda_name',
        'school_graduated_year',
        'school_graduated_address',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
