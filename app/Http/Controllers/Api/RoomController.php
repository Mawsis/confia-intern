<?php

namespace App\Http\Controllers\API;

use App\Enums\CleanedEnum;
use App\Enums\StatusEnum;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Room;
use Illuminate\Validation\Rule;

class RoomController extends Controller
{
    public function index()
    {
        return response()->json(Room::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $this->validate($request, [
            "number"=>"integer|required",
            "state"=> [Rule::enum(StatusEnum::class)],
            "cleaned"=> [Rule::enum(CleanedEnum::class)],
        ]);
    
        $room = Room::create($validated);
        
        return response()->json($room, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Room $room)
    {
        return response()->json($room);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, room $room)
    {
        $validated = $this->validate($request, [
            "number"=>"integer|required",
            "state"=> [Rule::enum(StatusEnum::class)],
            "cleaned"=> [Rule::enum(CleanedEnum::class)],
        ]);

        // On modifie les informations de l'utilisateur
        $room->update([$validated]);

        // On retourne la réponse JSON
        return response()->json();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(room $room)
    {
        // On supprime l'utilisateur
        $room->delete();
    
        // On retourne la réponse JSON
        return response()->json();
    }
}
