<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Mood extends Model
{
    public function feels(){
      return $this->hasMany('Feel');
    }
}
