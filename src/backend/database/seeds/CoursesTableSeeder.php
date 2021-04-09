<?php

use App\Models\Course;
use Illuminate\Database\Seeder;

class CoursesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $courses = [
            [
                'code' => 'BSIT',
                'description' => 'Bachelor of Science in Information Technology',
                'major' => '',
            ],
            [
                'code' => 'BEED',
                'description' => 'Bachelor in Elementary Education',
                'major' => '',
            ],
            [
                'code' => 'BSED-Math',
                'description' => 'Bachelor in Secondary Education major in Mathematics',
                'major' => 'Mathematics',
            ],
            [
                'code' => 'BSED-SS',
                'description' => 'Bachelor in Secondary Education major in Social Studies',
                'major' => 'Social Studies',
            ],
            [
                'code' => 'BSED+',
                'description' => 'Bachelor of Secondary Education - Supplemental',
                'major' => '',
            ]
        ];

        foreach ($courses as $course) {
            Course::create($course);
        }
    }
}
