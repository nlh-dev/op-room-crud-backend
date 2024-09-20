-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-09-2024 a las 04:52:13
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `op-room-system-db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `patients`
--

CREATE TABLE `patients` (
  `patients_id` int(11) NOT NULL,
  `patients_name` varchar(191) NOT NULL,
  `patients_surgery_type_id` int(11) NOT NULL,
  `patients_started_date` datetime(3) NOT NULL,
  `patients_updated_date` datetime(3) DEFAULT NULL,
  `patients_surgery_state_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `patients`
--

INSERT INTO `patients` (`patients_id`, `patients_name`, `patients_surgery_type_id`, `patients_started_date`, `patients_updated_date`, `patients_surgery_state_id`) VALUES
(1, 'Hector Navarro', 1, '2024-09-19 22:15:27.000', NULL, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `roles_id` int(11) NOT NULL,
  `roles_name` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`roles_id`, `roles_name`) VALUES
(1, 'Administrador'),
(2, 'Usuario Estandar');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `surgery_states`
--

CREATE TABLE `surgery_states` (
  `surgery_state_id` int(11) NOT NULL,
  `surgery_state_name` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `surgery_states`
--

INSERT INTO `surgery_states` (`surgery_state_id`, `surgery_state_name`) VALUES
(1, 'En Reposo'),
(2, 'En Operacion');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `surgery_types`
--

CREATE TABLE `surgery_types` (
  `surgery_type_id` int(11) NOT NULL,
  `surgery_type_name` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `surgery_types`
--

INSERT INTO `surgery_types` (`surgery_type_id`, `surgery_type_name`) VALUES
(1, 'Cirugia General');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `op_users` varchar(191) NOT NULL,
  `op_users_password` varchar(191) NOT NULL,
  `op_users_role` int(11) NOT NULL,
  `op_users_state` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `op_users`, `op_users_password`, `op_users_role`, `op_users_state`) VALUES
(3, 'admin', 'admin', 1, 0),
(4, 'user', 'user', 2, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) NOT NULL,
  `checksum` varchar(64) NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) NOT NULL,
  `logs` text DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('47b11d8d-5f1c-4f55-9f76-521f5327da94', 'fb5f956dd866a7edbd3d3c7e777e1625c88665de73924b4ae6a4429b81d04698', '2024-09-20 02:04:20.488', '20240920020420_db_init', NULL, NULL, '2024-09-20 02:04:20.382', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `patients`
--
ALTER TABLE `patients`
  ADD PRIMARY KEY (`patients_id`),
  ADD KEY `patients_patients_surgery_type_id_fkey` (`patients_surgery_type_id`),
  ADD KEY `patients_patients_surgery_state_id_fkey` (`patients_surgery_state_id`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`roles_id`);

--
-- Indices de la tabla `surgery_states`
--
ALTER TABLE `surgery_states`
  ADD PRIMARY KEY (`surgery_state_id`);

--
-- Indices de la tabla `surgery_types`
--
ALTER TABLE `surgery_types`
  ADD PRIMARY KEY (`surgery_type_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `users_op_users_role_fkey` (`op_users_role`);

--
-- Indices de la tabla `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `patients`
--
ALTER TABLE `patients`
  MODIFY `patients_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `roles_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `surgery_states`
--
ALTER TABLE `surgery_states`
  MODIFY `surgery_state_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `surgery_types`
--
ALTER TABLE `surgery_types`
  MODIFY `surgery_type_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `patients`
--
ALTER TABLE `patients`
  ADD CONSTRAINT `patients_patients_surgery_state_id_fkey` FOREIGN KEY (`patients_surgery_state_id`) REFERENCES `surgery_states` (`surgery_state_id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `patients_patients_surgery_type_id_fkey` FOREIGN KEY (`patients_surgery_type_id`) REFERENCES `surgery_types` (`surgery_type_id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_op_users_role_fkey` FOREIGN KEY (`op_users_role`) REFERENCES `roles` (`roles_id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
