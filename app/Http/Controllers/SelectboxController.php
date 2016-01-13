<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Mood;
use App\Feel;

class SelectboxController extends Controller
{
  public function index(){
    $moods = Mood::select('id','name')->get();
    return $moods;
  }

  public function store(Request $request){
      $rules = [
          'mood_id' => 'required|integer|exists:moods,id'
      ];
      $this->validate($request, $rules);

      $feels = Feel::select('id','name')->where('mood_id','=',$request->mood_id)->get();
      return $feels;
  }
}
