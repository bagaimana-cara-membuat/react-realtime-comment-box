<?php

use Illuminate\Database\Seeder;

class FeelTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      $now = date('Y-m-d H:i:s');
      DB::table('feels')->insert([
          'mood_id'     => 1,
          'name'       => 'Happy',
          'created_at' => $now, 'updated_at' => $now
      ]);
      DB::table('feels')->insert([
          'mood_id'     => 1,
          'name'       => 'Excited',
          'created_at' => $now, 'updated_at' => $now
      ]);
      DB::table('feels')->insert([
          'mood_id'     => 1,
          'name'       => 'Nostalgic',
          'created_at' => $now, 'updated_at' => $now
      ]);
      DB::table('feels')->insert([
          'mood_id'     => 2,
          'name'       => 'Sad',
          'created_at' => $now, 'updated_at' => $now
      ]);
      DB::table('feels')->insert([
          'mood_id'     => 2,
          'name'       => 'Hurt',
          'created_at' => $now, 'updated_at' => $now
      ]);
      DB::table('feels')->insert([
          'mood_id'     => 2,
          'name'       => 'Frustrated',
          'created_at' => $now, 'updated_at' => $now
      ]);
      DB::table('feels')->insert([
          'mood_id'     => 3,
          'name'       => 'Fat',
          'created_at' => $now, 'updated_at' => $now
      ]);
      DB::table('feels')->insert([
          'mood_id'     => 3,
          'name'       => 'Exhausted',
          'created_at' => $now, 'updated_at' => $now
      ]);
      DB::table('feels')->insert([
          'mood_id'     => 3,
          'name'       => 'Lazy',
          'created_at' => $now, 'updated_at' => $now
      ]);
      DB::table('feels')->insert([
          'mood_id'     => 4,
          'name'       => 'Thumb up',
          'created_at' => $now, 'updated_at' => $now
      ]);
      DB::table('feels')->insert([
          'mood_id'     => 4,
          'name'       => 'Swear',
          'created_at' => $now, 'updated_at' => $now
      ]);
      DB::table('feels')->insert([
          'mood_id'     => 4,
          'name'       => 'Cross Finger',
          'created_at' => $now, 'updated_at' => $now
      ]);
    }
}
