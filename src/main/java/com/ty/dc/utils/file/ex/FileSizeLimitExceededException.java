package com.ty.dc.utils.file.ex;

import com.ty.dc.utils.file.ex.FileException;

/**
 * 文件名大小限制异常类
 *
 * @author ruoyi
 */
public class FileSizeLimitExceededException extends FileException {
    private static final long serialVersionUID = 1L;

    public FileSizeLimitExceededException(long defaultMaxSize) {
        super("upload.exceed.maxSize", new Object[]{defaultMaxSize});
    }
}
