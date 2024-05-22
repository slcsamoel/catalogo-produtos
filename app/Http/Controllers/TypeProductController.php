<?php

namespace App\Http\Controllers;

use App\Http\Requests\TypeProductRequest;
use App\Http\Resources\TypeProductResource;
use App\Models\TypeProduct;
use Illuminate\Http\Request;

class TypeProductController extends Controller
{

    public function index()
    {
        $typesProducts = TypeProductResource::collection(TypeProduct::latest()->paginate(10));
        return inertia('TypeProducts/index', [
            'typesProducts' =>  $typesProducts
        ]);
    }

    public function store(TypeProductRequest  $request)
    {
        $attr = $request->toArray();

        TypeProduct::create($attr);

        return back()->with([
            'type' => 'success',
            'message' => 'User has been created',
        ]);
    }

    public function update(TypeProductRequest $request, TypeProduct $typeProduct)
    {
        $attr = $request->toArray();

        $typeProduct->update($attr);

        return back()->with([
            'type' => 'success',
            'message' => 'User has been updated',
        ]);
    }

    public function destroy(TypeProduct $typeProduct)
    {
        $typeProduct->delete();

        return back()->with([
            'type' => 'success',
            'message' => 'User has been deleted',
        ]);
    }
}
