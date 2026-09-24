import winston from "winston";
import path from "path";
import moment from "moment-timezone";

// Resolve the path to the 'logging' folder (one level up from 'utils', then into 'logging')
const currentDir = __dirname;
const srcDir = path.resolve(currentDir, "..");
const loggingDir = path.resolve(srcDir, "logging");

// Custom format: timestamp + level + message
const customFormat = winston.format.printf(({ level, message, timestamp }) => {
    return `${timestamp} [${level.toUpperCase()}]: ${message}`;
});

// Set the desired timezone
const timeZone = "Asia/Karachi"; // For Pakistan

const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.timestamp({ format: () => moment().tz(timeZone).format() }),
        customFormat
    ),
    transports: [
        // Print all logs (debug and above) to the console
        new winston.transports.Console({ level: "debug" }),

        // Save all logs (info and above) to a general run log
        new winston.transports.File({
            filename: path.join(loggingDir, "test_run.log"),
            level: "info",
            maxFiles: 5,                  // Number of rotated log files to retain
            maxsize: 5 * 1024 * 1024,     // Rotate after 5MB
        }),

        // Save only errors to a dedicated error log
        new winston.transports.File({
            filename: path.join(loggingDir, "test_error.log"),
            level: "error",
            maxFiles: 5,
            maxsize: 5 * 1024 * 1024,
        }),
    ],
});

export default logger;