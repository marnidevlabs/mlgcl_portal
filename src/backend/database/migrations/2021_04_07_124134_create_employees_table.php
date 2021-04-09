<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmployeesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('employees', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('user_id');
            $table->string('first_name');
            $table->string('last_name');
            $table->string('middle_name')->nullable();
            $table->string('birthdate', 15);
            $table->string('personal_email')->nullable();
            $table->string('religion');
            $table->string('civil_status');
            $table->string('gender');
            $table->string('contact_number');
            $table->string('block')->nullable();
            $table->string('street')->nullable();
            $table->string('barangay');
            $table->string('municipality');
            $table->string('province');
            $table->string('zipcode');
            $table->string('emergency_contact_name');
            $table->string('emergency_contact_number');
            $table->string('school_graduateda_name');
            $table->string('school_graduated_year');
            $table->string('school_graduated_address');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('employees');
    }
}
