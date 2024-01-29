<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('type_users')->insert([
            'type' => 'Root',
            'descricao' => 'Usuario Root do sistema',
        ]);

        DB::table('type_users')->insert([
            'type' => 'Administrador',
            'descricao' => 'Usuario  Administrador do Sistema',
        ]);

        DB::table('type_users')->insert([
            'type' => 'Assistente de conteúdo',
            'descricao' => 'Usuario  com permissão para criar e gerenciar Conteudos',
        ]);
    }
}
