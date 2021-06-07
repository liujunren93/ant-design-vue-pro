import OSS from 'ali-oss'
export class MyOSS {
    ossClient
    dir // 上传目录
    constructor (region, accessKeyId, accessKeySecret, stsToken, bucket, dir) {
      console.log(region)
       this.ossClient = new OSS({
            region: 'oss-cn-shanghai',
            accessKeyId: accessKeyId,
            accessKeySecret: accessKeySecret,
            stsToken: stsToken,
            bucket: bucket,
            secure: true
          })
          this.dir = dir
    }

     upload (filename, file) {
        return this.ossClient.put(this.buildName(filename), file)
    }
     buildName (filename) {
        var fileExtension = filename.substring(filename.lastIndexOf('.'))
        const newFilename = this.dir + '/' + Date.parse(new Date()) / 1000 + Math.random().toString(36).slice(-6) + fileExtension
        return newFilename
    }
}
