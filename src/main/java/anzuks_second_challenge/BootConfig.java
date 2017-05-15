package anzuks_second_challenge;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan(basePackages = "anzuks_second_challenge")
@EnableAutoConfiguration
public class BootConfig {

	public static void main(final String[] args) {
		SpringApplication.run(BootConfig.class, args);
	}

}
