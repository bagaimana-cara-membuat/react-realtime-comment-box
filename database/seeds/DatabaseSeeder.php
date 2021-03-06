<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UserTableSeeder::class);
        $this->call(CommentTableSeeder::class);
        $this->call(MoodTableSeeder::class);
        $this->call(FeelTableSeeder::class);
    }
}
