<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Client;

class ClientController extends Controller
{
    public function index()
    {
        return response()->json(Client::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $this->validate($request, [
            "name"=>"required|string",
            "email"=>"required|email",
            "phone"=>"required|string",
            "national_number"=>"required|string"
        ]);
    
        $client = Client::create($validated);
        
        return response()->json($client, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Client $client)
    {
        return response()->json($client);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Client $client)
    {
        $validated = $this->validate($request, [
            "name"=>"required|string",
            "email"=>"required|email",
            "phone"=>"required|string",
            "national_number"=>"required|string"
        ]);

        // On modifie les informations de l'utilisateur
        $client->update([$validated]);

        // On retourne la réponse JSON
        return response()->json();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Client $client)
    {
        // On supprime l'utilisateur
        $client->delete();
    
        // On retourne la réponse JSON
        return response()->json();
    }
}
