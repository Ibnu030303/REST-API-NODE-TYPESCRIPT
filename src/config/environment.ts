import 'dotenv/config'

const CONFIG = {
  db: process.env.DB,
  jwt_public: `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAjfTNzKtLDDizPg/BQT8C
dHZNuegDqGloQxR9Lbn01hG2M7T6cCLaNSaGJ4bZh/jYDCOkmv9CKQqsfA68+blo
D54VOdO8KKHuJNaz+oVV4qPmqJf/AcfsflaMDpnJ5+EgV7qb51RkjNajZJxTAGzq
8B8mt3ssW5YdPs56Lm7/UyNOWKNP6tNmaKVYuIjz7wVLJ/krln4oHniazE2JKNXo
jNDUCd/sgCRIeLU0jsOJcx5WqO2E5ZU1X2rZuAg0aJcGSrOjvLh+Fzbrvvrc4E3f
Vj6dMWTQxMqa3hfVDsODkxkfp4eMdzpXksCb/gicJFXrE/0TpGPDOXIdayCmNhu1
HQIDAQAB
-----END PUBLIC KEY-----`,
  jwt_private: `-----BEGIN RSA PRIVATE KEY-----
MIIEowIBAAKCAQEAjfTNzKtLDDizPg/BQT8CdHZNuegDqGloQxR9Lbn01hG2M7T6
cCLaNSaGJ4bZh/jYDCOkmv9CKQqsfA68+bloD54VOdO8KKHuJNaz+oVV4qPmqJf/
AcfsflaMDpnJ5+EgV7qb51RkjNajZJxTAGzq8B8mt3ssW5YdPs56Lm7/UyNOWKNP
6tNmaKVYuIjz7wVLJ/krln4oHniazE2JKNXojNDUCd/sgCRIeLU0jsOJcx5WqO2E
5ZU1X2rZuAg0aJcGSrOjvLh+Fzbrvvrc4E3fVj6dMWTQxMqa3hfVDsODkxkfp4eM
dzpXksCb/gicJFXrE/0TpGPDOXIdayCmNhu1HQIDAQABAoIBAEboYWQ6q+IO8Hmv
pPjSYIeMEIcsPaeB/3KCaYTNvl6vujNZ0z7wKc8izyAvW7lvs3tc0nwZxRJ7Im1V
b0/OLQygCjo4aWRifnIoTP52W9A5zp2oTti05Iy27n7ckt4gteccb4O9w/wVusgm
zc8ImNIYvV4pSJ72/OTCfoVzLFZ6LIjedm3Ca9gOCAk83yhS6l8QqSZ2nEOt5Cck
fNe3WCddKv8ymo8ZcYbAHTxbxTCz23+URhk9iYdab989pDQneEu2i7m+gwijgyAG
QPX1DLq9m8IHo4G/Jmz3KTRdfqqxlnT840LnEQBz2ovvk/6BrQqqRLx0BBvvhAe2
eK7D8AECgYEA1kKimeB2B35bawn6RMPqu9XrfSp5zMhTiO6bTAQcNxEvoGmWeUKg
HKs53itXgZdAi0vFq3jdI+6CIGxduvLFkX9YYC0SrkvuMdxTmOz4zwE6HRXHpuWu
mygeeQVni8gX8F1NdhrjwAQH6svqkS6wMs9YzJ7w6xoP2Qk3oxJHA+ECgYEAqZxM
Slb+1BKgQxVeklmCA8s16Aws4AK75+kj0ZFsfnF0A5uNEKF1JsvXpX5Aue9wl6lb
WvISImtfaIQdj1eylCzV81sELdR976kGGbBYS8RLpOWI2bhM+5y331MhAv1tSANB
p8EbIOIDzfm7soNdzzGw62EYQFmJjkXtA1lo2L0CgYEAoHXtAmKo4jnOSx6A0KkN
DblKkEWUTDom3WEc6tQVMWRsj60j5RJxiKbvQqSg90uIKgoIMr/klblUuOWPWKfi
MHH3hKec2u3AqJTCAsBOIfFgTVH3YNWYa1ijYa0bfALRctDdZzsCH9ak+0HWHP6j
NJo2fZ/2+4tcHQWbJkRU7OECgYBOAgLclhJx+3cWI3fxm5U+pXHPnfnttZQy33mH
43ig1xFir2I76eZ1x38RMHYYjlWci1nnBDru9a9V5J2r1cvedpiYap4LbhXV6klR
+1dA0bFwz9kXObq+Zp/y6MrgEyr12fmSbDBL+WeCjn+TZPP6XYJfX7LFteicNPED
f1XHiQKBgEyNNH5dvRFvPbkmaGPkVD8liiuOh80wKl/5uwhxQDFHsOjjAKY5vAYc
RIZg6JnHqq2+Qk5SHq7kD86lqay1Z9P7M12Xot+FyEiP4bcaHL51AJFQ4A+iwsHl
sYFv6eFH8S3vv/Mu4QyZKweqgJ+QoML/Pi8XJvkzdufss4HfssxY
-----END RSA PRIVATE KEY-----`
}
export default CONFIG
