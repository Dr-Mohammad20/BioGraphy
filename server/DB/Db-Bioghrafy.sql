-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: nanadb
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `coursetbl`
--

DROP TABLE IF EXISTS `coursetbl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `coursetbl` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name_dore` varchar(50) NOT NULL,
  `tozihate_dore` text NOT NULL,
  `zaman_dore` varchar(50) NOT NULL,
  `hazine_dore` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coursetbl`
--

LOCK TABLES `coursetbl` WRITE;
/*!40000 ALTER TABLE `coursetbl` DISABLE KEYS */;
INSERT INTO `coursetbl` VALUES (1,'دوره 1','محل قرار دادن توضیحات دوره','60 ساعت','0000000'),(3,'دوره 2','محل قرار دادن توضیحات دوره','32 ساعت','000000'),(4,'دوره 3','محل قرار دادن توضیحات دوره','3 ماه','0000000000'),(5,'دوره 4','محل قرار دادن توضیحات دوره','32','3232323'),(6,'دوره 5','محل قرار دادن توضیحات دوره','322321','46687468468'),(7,'دوره 6','محل قرار دادن توضیحات دوره','56465','4654646'),(8,'دوره 7','محل قرار دادن توضیحات دوره','00','0132145465'),(9,'دوره 8','محل قرار دادن توضیحات دوره','123','654645897'),(10,'دوره 9','محل قرار دادن توضیحات دوره','546546','561321454'),(11,'دوره 10','محل قرار دادن توضیحات دوره','5674878','21354658465');
/*!40000 ALTER TABLE `coursetbl` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usertbl`
--

DROP TABLE IF EXISTS `usertbl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usertbl` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usertbl`
--

LOCK TABLES `usertbl` WRITE;
/*!40000 ALTER TABLE `usertbl` DISABLE KEYS */;
INSERT INTO `usertbl` VALUES (1,'123456','123456');
/*!40000 ALTER TABLE `usertbl` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-09 23:17:28
