-- phpMyAdmin SQL Dump
-- version 4.8.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 17 Okt 2020 pada 08.13
-- Versi server: 10.1.33-MariaDB
-- Versi PHP: 7.2.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dbcafeshop`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `categoryName` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `category`
--

INSERT INTO `category` (`id`, `categoryName`) VALUES
(1, 'Minuman'),
(2, 'Dessert'),
(3, 'Main Dish'),
(4, 'Juice');

-- --------------------------------------------------------

--
-- Struktur dari tabel `history`
--

CREATE TABLE `history` (
  `id` int(255) NOT NULL,
  `invoice` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cashier` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `orders` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `amounts` int(255) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` int(255) NOT NULL,
  `image` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `idCategory` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `image`, `idCategory`, `createdAt`, `updatedAt`) VALUES
(3, 'Cappucino', 5000, 'https://images.unsplash.com/photo-1521127474489-d524412fd439?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80', 1, '2020-10-07 07:30:54', '2020-08-05 17:00:00'),
(7, 'Black Forest', 30000, 'http://localhost:4000/uploads/Thu Oct 15 2020-1602728905382-black.jpg', 0, '2020-10-15 02:28:25', '2020-10-15 02:28:25'),
(12, 'Espresso', 10000, 'http://localhost:4000/uploads/Fri Oct 16 2020-1602820701248-espresso.jpg', 1, '2020-10-16 03:58:21', '2020-10-16 03:58:21'),
(13, 'Coffee Latte', 15000, 'http://localhost:4000/uploads/Fri Oct 16 2020-1602820750846-coffe.jpg', 0, '2020-10-16 03:59:10', '2020-10-16 03:59:10'),
(14, 'Coffee Latte', 15000, 'http://localhost:4000/uploads/Fri Oct 16 2020-1602820750884-coffe.jpg', 0, '2020-10-16 03:59:10', '2020-10-16 03:59:10'),
(15, 'Coffee Latte', 15000, 'http://localhost:4000/uploads/Fri Oct 16 2020-1602820788534-coffe.jpg', 1, '2020-10-16 03:59:48', '2020-10-16 03:59:48'),
(16, 'Red Velvet Latte', 33000, 'http://localhost:4000/uploads/Fri Oct 16 2020-1602820823144-red.jpg', 0, '2020-10-16 04:00:23', '2020-10-16 04:00:23'),
(17, 'Red Velvet Latte', 33000, 'http://localhost:4000/uploads/Fri Oct 16 2020-1602820878779-red.jpg', 1, '2020-10-16 04:01:18', '2020-10-16 04:01:18'),
(19, 'Choco Rum', 28000, 'http://localhost:4000/uploads/Fri Oct 16 2020-1602820914123-choco.jpg', 2, '2020-10-16 04:01:54', '2020-10-16 04:01:54'),
(20, 'Wiener Schnitzel', 69000, 'http://localhost:4000/uploads/Fri Oct 16 2020-1602820967374-wiener.jpg', 3, '2020-10-16 04:02:47', '2020-10-16 04:02:47');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `roleId` int(11) NOT NULL,
  `username` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `roleId`, `username`, `createdAt`, `updatedAt`) VALUES
(1, 'terra@gmail.com', '$2a$10$k.oMyDn9C.jAXpST46wLG.neUVMh01JlWFEgbh4SxqEcuRjoyEu9K', 2, 'Terra', '2020-10-06 21:17:45', '2020-10-06 21:17:45'),
(2, 'fiamma@gmail.com', '$2a$10$xvz1JlrGgSOFllIgOMhP2O7TxLfNtxW1a3/nbzvPzErx5F7NdFFSu', 2, 'Fiamma', '2020-10-07 09:46:25', '2020-10-07 09:46:25'),
(3, 'acqua@gmail.com', '$2a$10$g2e4CzWhKiHaNPxdxIYmT.0eRzVt1C9CSSUFe58oU.X8N62uWIHUy', 2, 'Acqua', '2020-10-07 09:48:04', '2020-10-07 09:48:04'),
(4, 'vento@gmail.com', '$2a$10$6V5JLmS6qk.8ao.PfCeBE.lWIuaFuZYSzW9xBIN5ZUQan/5US6jB.', 2, 'Vento', '2020-10-07 09:56:24', '2020-10-07 09:56:24');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `history`
--
ALTER TABLE `history`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
