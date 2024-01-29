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
        Schema::create('pedidos', function (Blueprint $table) {
            $table->id();
            $table->string('nome')->nullable();
            $table->string('cpf')->nullable();
            $table->string('telefone')->nullable();
            $table->string('endereco')->nullable();
            $table->string('observacao')->nullable();
            $table->decimal('valor_total')->nullable();
            $table->dateTime('data_hora')->nullable()->default(now());
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
        Schema::dropIfExists('pedidos');
    }
};
