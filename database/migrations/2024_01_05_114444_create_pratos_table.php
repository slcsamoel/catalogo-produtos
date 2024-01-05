<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pratos', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('product_id')->nullable();
            $table->unsignedBigInteger('garnishe_id');
            $table->unsignedBigInteger('accompaniment_id');
            $table->unsignedBigInteger('meet_id');
            $table->unsignedBigInteger('garnishe_extra_id')->nullable();
            $table->unsignedBigInteger('accompaniment_extra_id')->nullable();
            $table->unsignedBigInteger('meet_extra_id')->nullable();
            $table->decimal('preco')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pratos');
    }
};
