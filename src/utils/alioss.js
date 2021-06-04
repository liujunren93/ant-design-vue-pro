import OSS from 'ali-oss'
export class MyOSS {
    ossClient
    dir // 上传目录
    constructor (region, accessKeyId, accessKeySecret, stsToken, bucket, dir) {
      console.log(region)
       this.ossClient = new OSS({
            region: 'cn-shanghai',
            accessKeyId: accessKeyId,
            accessKeySecret: accessKeySecret,
            stsToken: stsToken,
            bucket: bucket
          })
          this.dir = dir
    }

    async upload (filename, file) {
        try {
            // use 'chunked encoding'
          console.log(this.dir)
            const result = await this.ossClient.put(this.buildName(filename), file)
            console.log(result)
            } catch (e) {
              console.log(e)
            }
    }
     buildName (filename) {
        var fileExtension = filename.substring(filename.lastIndexOf('.'))
        const newFilename = this.dir + '/' + Date.parse(new Date()) / 1000 + Math.random().toString(36).slice(-6) + fileExtension
        return newFilename
    }
}
