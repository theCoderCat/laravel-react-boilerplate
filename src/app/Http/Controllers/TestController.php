<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Faker;

class TestController extends Controller
{
    //
    public function usersList(Request $request) {
        $faker = Faker\Factory::create();
        $arr = [];
        for ($i=0; $i < 50; $i++) { 
            $arr[] = (object)[
                'id' => $i+1,
                'name' => $faker->name,
                'email' => $faker->email,
                'bio' => $faker->paragraph($nbSentences = 3, $variableNbSentences = true),
                'created_at' => \Carbon\Carbon::now(),
                'updated_at' => \Carbon\Carbon::now(),
            ];
        }
        return response()->json($arr);
    }
    public function userDetail(Request $request, $id) {
        $user = (object)[
            'id' => $i+1,
            'name' => $faker->name,
            'email' => $faker->email,
            'bio' => $faker->paragraph($nbSentences = 3, $variableNbSentences = true),
            'created_at' => \Carbon\Carbon::now(),
            'updated_at' => \Carbon\Carbon::now(),
        ];
        return response()->json($user);
    }
}
