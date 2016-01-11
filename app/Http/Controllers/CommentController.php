<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Comment;

class CommentController extends Controller
{
  public function index()
  {
    $total_comments = Comment::count();
    $n = 5;
    $comments = Comment::skip($total_comments - 5)->take($n)->get();
    return $comments;
  }

  public function store(Request $request)
  {
    $rules = [
        'author' => 'required|max:50',
        'text'   => 'required|unique:comments,text|max:255',
    ];
    $this->validate($request, $rules);

    $comment = new Comment;
    $comment->author = $request->author;
    $comment->text = $request->text;
    $comment->save();

    return $comment;
  }
}
