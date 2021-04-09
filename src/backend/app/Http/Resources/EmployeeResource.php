<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class EmployeeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'user' => $this->user,
            'first_name' => $this->first_name,
            'last_name' => $this->last_name,
            'middle_name' => $this->middle_name,
            'birthdate' => $this->birthdate,
            'personal_email' => $this->personal_email,
            'religion' => $this->religion,
            'civil_status' => $this->civil_status,
            'gender' => $this->gender,
            'contact_number' => $this->contact_number,
            'block' => $this->block,
            'street' => $this->street,
            'barangay' => $this->barangay,
            'municipality' => $this->municipality,
            'province' => $this->province,
            'zipcode' => $this->zipcode,
            'emergency_contact_name' => $this->emergency_contact_name,
            'emergency_contact_number' => $this->emergency_contact_number,
            'school_graduateda_name' => $this->school_graduateda_name,
            'school_graduated_year' => $this->school_graduated_year,
            'school_graduated_address' => $this->school_graduated_address,
        ];
    }
}
