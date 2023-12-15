<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    
    public function index()
    {
        return response()->json(Book::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $this->validate($request, [
            "client_id"=>"required|exists:clients,id|integer",
            "room_id"=>"required|exists:rooms,id|integer",
            "start_date"=>"required|date",
            "end_date"=>"required|date"
        ]);
    
        $book = Book::create($validated);
        
        return response()->json($book, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Book $book)
    {
        return response()->json($book);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Book $book)
    {
        $validated = $this->validate($request, [
            "client_id"=>"required|exists:clients,id|integer",
            "room_id"=>"required|exists:rooms,id|integer",
            "start_date"=>"required|date",
            "end_date"=>"required|date"
        ]);

        // On modifie les informations de l'utilisateur
        $book->update([$validated]);

        // On retourne la réponse JSON
        return response()->json();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Book $book)
    {
        // On supprime l'utilisateur
        $book->delete();
    
        // On retourne la réponse JSON
        return response()->json();
    }
}
