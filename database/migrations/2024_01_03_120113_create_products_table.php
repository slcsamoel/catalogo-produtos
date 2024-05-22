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
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('type_id');
            $table->string('nome')->unique();
            $table->decimal('preco')->nullable();
            $table->text('descricao')->nullable();
            $table->string('foto')->nullable();
            $table->decimal('qnt')->nullable();
            $table->integer('status')->default(1);
            $table->timestamps();

            $table->foreign('type_id')
                    ->references('id')
                    ->on('type_products');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
};
