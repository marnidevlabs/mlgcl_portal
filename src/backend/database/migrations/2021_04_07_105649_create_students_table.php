<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStudentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('students', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('user_id');
            $table->string('lrn')->nullable();
            $table->string('school_id')->nullable();
            $table->string('first_name');
            $table->string('last_name');
            $table->string('middle_name')->nullable();
            $table->string('birthdate', 20);
            $table->string('personal_email')->nullable();
            $table->string('religion');
            $table->string('civil_status', 50);
            $table->string('gender', 10);
            $table->string('contact_number', 20)->nullable();
            $table->text('block')->nullable();
            $table->text('street')->nullable();
            $table->string('barangay');
            $table->string('municipality');
            $table->string('province');
            $table->string('zipcode', 15);
            $table->string('emergency_contact_name');
            $table->string('emergency_contact_number');
            $table->string('school_graduated_name');
            $table->string('school_graduated_year');
            $table->string('school_graduated_address');
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('students');
    }
}
