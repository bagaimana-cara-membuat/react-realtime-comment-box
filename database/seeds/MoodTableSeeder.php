<?php

use Illuminate\Database\Seeder;

class MoodTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      $now = date('Y-m-d H:i:s');
      DB::table('moods')->insert([
          'name'     => 'Good',
          'created_at' => $now, 'updated_at' => $now
      ]);
      DB::table('moods')->insert([
          'name'     => 'Bad',
          'created_at' => $now, 'updated_at' => $now
      ]);
      DB::table('moods')->insert([
          'name'     => 'Ugly',
          'created_at' => $now, 'updated_at' => $now
      ]);
      DB::table('moods')->insert([
          'name'     => 'Gesture',
          'created_at' => $now, 'updated_at' => $now
      ]);
    }
}
