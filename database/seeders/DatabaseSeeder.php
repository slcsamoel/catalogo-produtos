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


        // Usuario Admin
        DB::table('users')->insert([
            'name' => 'Admin',
            'email' => 'admin@system.com',
            'password' => "bcrypt('admin')",
            'created_at' => "2024-05-21 14:09:51",
            'updated_at' => "2024-05-21 14:09:51",
            'status' => 1
        ]);

    }
}
