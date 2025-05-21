-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Maj 19, 2025 at 07:48 PM
-- Wersja serwera: 10.4.32-MariaDB
-- Wersja PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cardle`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `cardle`
--

CREATE TABLE `cardle` (
  `id` int(11) NOT NULL,
  `marka` varchar(50) NOT NULL,
  `model` varchar(50) NOT NULL,
  `rok_produkcji` int(11) NOT NULL,
  `typ_nadwozia` varchar(50) NOT NULL,
  `logo` varchar(20) DEFAULT NULL,
  `zdjecia` varchar(20) DEFAULT NULL,
  `kraj` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cardle`
--

INSERT INTO `cardle` (`id`, `marka`, `model`, `rok_produkcji`, `typ_nadwozia`, `logo`, `zdjecia`, `kraj`) VALUES
(1, 'Toyota', 'Corolla', 2020, 'sedan', 'toyota.jpg', 'corolla.jpg', 'Japonia'),
(2, 'Ford', 'Mustang', 2018, 'coupe', 'ford.jpg', 'mustang.jpg', 'USA'),
(3, 'Honda', 'Civic', 2019, 'hatchback', 'honda.jpg', 'civic.jpg', 'Japonia'),
(4, 'BMW', 'X5', 2021, 'SUV', 'bmw.jpg', 'x5.jpg', 'Niemcy'),
(5, 'Audi', 'A4', 2022, 'sedan', 'audi.jpg', 'a4.jpg', 'Niemcy'),
(6, 'Mercedes', 'C-Class', 2020, 'sedan', 'mercedes.jpg', 'c-class.jpg', 'Niemcy'),
(7, 'Volkswagen', 'Golf', 2019, 'hatchback', 'volkswagen.jpg', 'golf.jpg', 'Niemcy'),
(8, 'Lexus', 'RX', 2021, 'SUV', 'lexus.jpg', 'rx.jpg', 'Japonia'),
(9, 'Nissan', 'Altima', 2020, 'sedan', 'nissan.jpg', 'altima.jpg', 'Japonia'),
(10, 'Chevrolet', 'Camaro', 2018, 'coupe', 'chevrolet.jpg', 'camaro.jpg', 'USA'),
(11, 'Mazda', 'CX-5', 2019, 'SUV', 'mazda.jpg', 'cx-5.jpg', 'Japonia'),
(12, 'Hyundai', 'Elantra', 2020, 'sedan', 'hyundai.jpg', 'elantra.jpg', 'Korea Południowa'),
(13, 'Kia', 'Sportage', 2021, 'SUV', 'kia.jpg', 'sportage.jpg', 'Korea Południowa'),
(14, 'Subaru', 'Outback', 2019, 'SUV', 'subaru.jpg', 'outback.jpg', 'Japonia'),
(15, 'Volvo', 'XC60', 2020, 'SUV', 'volvo.jpg', 'xc60.jpg', 'Szwecja'),
(16, 'Tesla', 'Model 3', 2021, 'sedan', 'tesla.jpg', 'model_3.jpg', 'USA'),
(17, 'Porsche', '911', 2018, 'coupe', 'porsche.jpg', '911.jpg', 'Niemcy'),
(18, 'Jeep', 'Grand Cherokee', 2020, 'SUV', 'jeep.jpg', 'grand_cherokee.jpg', 'USA'),
(19, 'BMW', 'M5', 2005, 'sedan', 'bmw.jpg', 'm5.jpg', 'Niemcy'),
(20, 'Jaguar', 'F-Type', 2021, 'coupe', 'jaguar.jpg', 'f-type.jpg', 'Wielka Brytania'),
(21, 'Infiniti', 'Q50', 2020, 'sedan', 'infiniti.jpg', 'q50.jpg', 'Japonia'),
(22, 'Peugot', '208', 2020, 'hatchback', 'peugot.jpg', '208.jpg', 'Francja'),
(23, 'Dodge', 'Challenger', 2018, 'coupe', 'dodge.jpg', 'challenger.jpg', 'USA'),
(24, 'Chrysler', '300', 2020, 'sedan', 'chrysler.jpg', '300.jpg', 'USA'),
(25, 'Acura', 'RDX', 2021, 'SUV', 'acura.jpg', 'rdx.jpg', 'Japonia'),
(26, 'Genesis', 'G70', 2019, 'sedan', 'genesis.jpg', 'g70.jpg', 'Korea Południowa'),
(27, 'Mini', 'Cooper', 2020, 'hatchback', 'mini.jpg', 'cooper.jpg', 'Wielka Brytania'),
(28, 'Cadillac', 'XT5', 2018, 'SUV', 'cadillac.jpg', 'xt5.jpg', 'USA'),
(29, 'GMC', 'Terrain', 2019, 'SUV', 'gmc.jpg', 'terrain.jpg', 'USA'),
(30, 'Buick', 'Enclave', 2020, 'SUV', 'buick.jpg', 'enclave.jpg', 'USA'),
(31, 'Fiat', '500', 2018, 'hatchback', 'fiat.jpg', '500.jpg', 'Włochy'),
(32, 'Maserati', 'Ghibli', 2021, 'sedan', 'maserati.jpg', 'ghibli.jpg', 'Włochy'),
(33, 'Ferrari', 'Portofino', 2019, 'coupe', 'ferrari.jpg', 'portofino.jpg', 'Włochy'),
(34, 'Lamborghini', 'Urus', 2020, 'SUV', 'lamborghini.jpg', 'urus.jpg', 'Włochy'),
(35, 'Bentley', 'Continental GT', 2018, 'coupe', 'bentley.jpg', 'continental_gt.jpg', 'Wielka Brytania'),
(36, 'Rolls-Royce', 'Cullinan', 2019, 'SUV', 'rolls-royce.jpg', 'cullinan.jpg', 'Wielka Brytania'),
(37, 'Opel', 'Astra', 2022, 'hatchback', 'opel.jpg', 'astra.jpg', 'Niemcy'),
(38, 'McLaren', '720S', 2021, 'coupe', 'mclaren.jpg', '720s.jpg', 'Wielka Brytania'),
(39, 'Bugatti', 'Chiron', 2018, 'coupe', 'bugatti.jpg', 'chiron.jpg', 'Francja'),
(40, 'Pagani', 'Huayra', 2019, 'coupe', 'pagani.jpg', 'huayra.jpg', 'Włochy'),
(41, 'Koenigsegg', 'Regera', 2020, 'coupe', 'koenigsegg.jpg', 'regera.jpg', 'Szwecja'),
(42, 'Lotus', 'Evora', 2021, 'coupe', 'lotus.jpg', 'evora.jpg', 'Wielka Brytania'),
(43, 'Morgan', 'Plus Six', 2019, 'coupe', 'morgan.jpg', 'plus_six.jpg', 'Wielka Brytania');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `cardle`
--
ALTER TABLE `cardle`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cardle`
--
ALTER TABLE `cardle`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
