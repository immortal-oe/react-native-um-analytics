
#import "RNUMConfigure.h"

@implementation RNUMConfigure

+ (void)initWithAppkey:(NSString *)appkey channel:(NSString *)channel
{
  SEL sel = NSSelectorFromString(@"setWraperType:wrapperVersion:");
  if ([UMConfigure respondsToSelector:sel]) {
    [UMConfigure performSelector:sel withObject:@"react-native" withObject:@"1.0"];
  }
  [UMConfigure initWithAppkey:appkey channel:channel];
}

@end
