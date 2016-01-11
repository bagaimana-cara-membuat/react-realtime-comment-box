<?php

use Illuminate\Database\Seeder;

class CommentTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      $now = date('Y-m-d H:i:s');
      DB::table('comments')->insert([
          'author'     => 'Candra',
          'text'       => 'Hey, I am *italics*, can\'t you see?',
          'created_at' => $now, 'updated_at' => $now
      ]);
      DB::table('comments')->insert([
          'author'     => 'Rino',
          'text'       => 'Nice',
          'created_at' => $now, 'updated_at' => $now
      ]);
      DB::table('comments')->insert([
          'author'     => 'Indra',
          'text'       => 'Cool mate!',
          'created_at' => $now, 'updated_at' => $now
      ]);
    }
}
