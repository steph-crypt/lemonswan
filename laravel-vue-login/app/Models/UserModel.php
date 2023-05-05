<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserModel extends Model
{
    use HasFactory;
    Schema::create('secrets', function (Blueprint $table) {
        $table->id();
        $table->integer('user_id');
        $table->text('secret');
        $table->timestamps();
    });
}
