package com.ty.dc.base;

/**
 * Created by wen on 2018-7-12.
 */

import com.ty.dc.interceptor.AccessDeniedException;
import com.ty.dc.utils.AjaxResult;
import com.ty.dc.utils.Exceptions;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.converter.HttpMessageNotWritableException;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.io.FileNotFoundException;

@Slf4j
@RestControllerAdvice
public class GlobalExceptionHandler {

    @ResponseStatus(value = HttpStatus.BAD_REQUEST)
    @ExceptionHandler(value = MissingServletRequestParameterException.class)
    public AjaxResult msrpExceptionHandler(MissingServletRequestParameterException exception) {
        log.info(Exceptions.getStackTraceAsString(exception));
        return AjaxResult.error(exception.getMessage());
    }

    @ExceptionHandler(value = IllegalArgumentException.class)
    public AjaxResult IllegalArgumentExceptionHandler(IllegalArgumentException exception) {
        log.info(Exceptions.getStackTraceAsString(exception));
        return AjaxResult.error(exception.getMessage());
    }

    @ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR)
    @ExceptionHandler(value = FileNotFoundException.class)
    public AjaxResult FileNotFoundExceptionHandler(FileNotFoundException exception) {
        log.info(Exceptions.getStackTraceAsString(exception));
        return AjaxResult.error(exception.getMessage());
    }

    @ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR)
    @ExceptionHandler(value = HttpMessageNotWritableException.class)
    public AjaxResult HttpMessageNotWritableExceptionHandler(HttpMessageNotWritableException exception) {
        log.info(Exceptions.getStackTraceAsString(exception));
        return AjaxResult.error(exception.getMessage());
    }

    @ResponseStatus(value = HttpStatus.UNAUTHORIZED)
    @ExceptionHandler(value = AccessDeniedException.class)
    public AjaxResult AccessDeniedExceptionHandler(AccessDeniedException exception) {
        log.info(Exceptions.getStackTraceAsString(exception));
        return AjaxResult.error(exception.getMessage());
    }

    @ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR)
    @ExceptionHandler(value = Exception.class)
    public AjaxResult exceptionHandler(Exception exception) {
        log.error(Exceptions.getStackTraceAsString(exception));
        return AjaxResult.error(exception.getMessage());
    }

}
