### Key elements of secure systems
- Authentication and Authorization
- Encryption ^199759
- Network Security
- Storage Security
- Threat modelling and Risk assessment
- Compliance and Regulation
- Security training and awareness

---
### Authorization / Authentication

- ==Authentication==
	- Verifying identity of users or system attempting to access a resource
	- **Methods**:
		- Password
		- Biometrics
		- MFA
		  
- ==Authorization==
	- Level of access permitted to user
	- Method:
		- Access control lists (ACL)
		- Role based access control (RBAC)
		- Attribute based access control (ABAC)


#### Json Web Tokens (JWTs)
- It's a base64 string containing 3 parts:
![[Pasted image 20240601073351.png]]
- Each part is concatenated with a =="."== 
- Signature is created using
```
HMACSHA256(  
base64UrlEncode(header) + "." + base64UrlEncode(payload),  
secret  
)
```

- JWTs usage flow
  ![[Pasted image 20240601074732.png]]
- **Advantages:**
	- Compact and lightweight
	- Stateless - no need to store session data
	- Scalable

---
### Encryption

#### **Types:**

- **==At Rest==** ^e5db08
	- Encrypting data stored in DB / files / any storage medium 
	- Prevents unauthorized access even if someone gets data
- **==In Transit==**
	- Encrypting data when it moves from one point to another over network
	- Various protocols depending on the type of data exchanged
		- **Web**: HTTPS
		- **Email**: PGP (Pretty Good Protocol)
		- **Files**: SFTP
		- **Messages**: E2EE (End 2 End Encryption)
- ==**Field Level**==
	- Encrypting **specific fields** or columns within a database
	- Eg: Credit Card numbers, social security numbers


#### **Advantages**
- Enhanced security
	- Protects data from unauthorized access
	- Reduces risk of data breaches
- Compliance
	- Helps meet regulatory requirements concerning data protection
- Integrity
	- Guarantees that data remains unchanged during transmission


#### Considerations in Encryption
- Proper management of keys is vital for secure communication
- Updated protocols and softwares crucial for maintaining security


> [!info] 
> RSA and DSA are two algorithms used in generation of digital signature


> [!tip] 
> Nonce (Number used only once) is used in cryptographic communication to avoid "replay attacks"
> 

---

### Network Security

- Encompasses practices / technologies to safeguard the integrity of networks and data transmitted within them
- Majority comprises of:
	- ==**Firewall Protection**==
		- Controls incoming / outgoing traffic based on predefined security rules
		- Barrier between trusted internal network and untrusted external network
		- Eg: Packet filtering
		  
	- ==**Intrusion Detection and Prevention System (IDPS)**==
		- Monitors network traffic for suspicious activity / potential threats
		- Eg:
			-  ==Signature based detection==: Matches patterns in network traffic against known attack signatures
			- ==Anomaly based detection==: Learns normal behaviour and alerts when any deviation from the baseline
			  
	- ==**Virtual Private Network**==
		- Allows to access private network as if you are sitting within the private network

---

### Secure Storage

- Safeguards sensitive data stored within systems
- Involves robust encryption methods / access controls
- **Security of DB**
	- Done using [[#^e5db08| encryption at rest]]
- **Security of Backups**
	- Encrypted offsite backup
- **Security of Logs**
	- Data masking / redaction
	- Masking credit card numbers in logs


--- 

### Threat Modeling and Risk Assessment

- **Threat Modeling**
	- Structured way of identifying and prioritizing potential threats
	- Involves:
		- (a) **Identifying assets**: what needs to be protected
		- (b) **Identifying threats**: what are potential vulnerabilities that could compromise these assets
		- (c) **Assessing impact**: Understanding potential impact or consequences of these threats
		  
- **Risk Assessment**
	- (a) Likelihood of occurence
	- (b) Impact analysis
	- (c) Risk Prioritization
	  
- **Mitigation Strategies**
	- Educate / implement firewalls

--- 

### Compliance and Regulation
- PCI DSS (Payment card industry data security standards)
- GDPR (General data protection regulation)
- HIPAA (Health Insurance portability and accountability act)