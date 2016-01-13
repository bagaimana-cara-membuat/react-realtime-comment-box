<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Feel extends Model
{
    public function mood(){
      return $this->belongsTo('Mood');
    }
}
